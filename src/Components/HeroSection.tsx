import React, { useEffect, useRef } from 'react';
import '../app/globals.css';

const HeroSection: React.FC = () => {
    const scrollHeroSectionRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const heroRowsParentRef = useRef<HTMLDivElement>(null);
    const heroSectionContainerRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);
    const heroRowsChild = useRef<HTMLDivElement>(null);
    
    const maxClippingValue = 90;
    const maxScaleValue = 20;
    const minClippingValue = 0;
    const minScaleValue = 1;
    let clipPercentage = 100;
    let scalePercentage = 20;
    let videoContainerOpacity = 1;

    const xTranslationRanges = new Map<number, number>([
        [0, 10],
        [1, -6],
        [2, 7],
        [3, -9]
    ]);

    const handleHeroScroll = () => {
        if (!scrollHeroSectionRef.current || !heroSectionContainerRef.current || !videoContainerRef.current || !heroRowsParentRef.current || !linesRef.current) return;

        const headerSection = {
            start: 0,
            end: scrollHeroSectionRef.current.offsetHeight
        };
        const clippingAnimationSection = {
            start: 0,
            end: headerSection.end * 0.55
        };
        const heroRowAnimationSection = {
            start: clippingAnimationSection.end + 1,
            end: (headerSection.end - window.innerHeight) * 0.9
        };

        const getCurrentSection = (currentScrollPosition: number) => {
            const currentSection = {
                clippingAnimationSection: false,
                heroRowAnimationSection: false,
                outsideHeader: false
            };
            if (currentScrollPosition >= headerSection.end) {
                currentSection.outsideHeader = true;
            } else if (currentScrollPosition >= clippingAnimationSection.start && currentScrollPosition <= clippingAnimationSection.end) {
                currentSection.clippingAnimationSection = true;
            } else if (currentScrollPosition >= heroRowAnimationSection.start && currentScrollPosition <= heroRowAnimationSection.end * 1.1) {
                currentSection.heroRowAnimationSection = true;
            } else {
                currentSection.outsideHeader = true;
            }
            return currentSection;
        }

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (heroSectionContainerRef.current.classList.contains('hide')) {
            heroSectionContainerRef.current.classList.remove('hide');
        }
        const currentSection = getCurrentSection(currentScrollTop);
        if (currentSection.outsideHeader) {
            scalePercentage = minScaleValue;
            clipPercentage = minClippingValue;
        } else if (currentSection.clippingAnimationSection) {
            clipPercentage = maxClippingValue - (currentScrollTop / clippingAnimationSection.end) * maxClippingValue;
            scalePercentage = minScaleValue + (clipPercentage / maxClippingValue) * maxScaleValue;
            videoContainerOpacity = (clipPercentage < 1.4) ? videoContainerOpacity / 2 : 1;
        } else if (currentSection.heroRowAnimationSection) {
            scalePercentage = minScaleValue;
            clipPercentage = minClippingValue;
            let index = 0;
            const heroRows = heroRowsChild!.current?.childNodes!;
            for (let [index,row] of Array.from(heroRows.entries())) {
                const translationRange = xTranslationRanges.get(index)!;
                const xTranslationPosition = Math.min((currentScrollTop - heroRowAnimationSection.start) / (heroRowAnimationSection.end - heroRowAnimationSection.start), 1) * translationRange;
                (row as HTMLElement).style.transform = `translateX(${xTranslationPosition}%)`;
                index++;
            }

            const scrollPercentage = Math.min((currentScrollTop - heroRowAnimationSection.start) / (heroRowAnimationSection.end - heroRowAnimationSection.start), 1);

            let oneOpacityCount = 0;
            const spans = Array.from(linesRef.current.querySelectorAll('span'));
            spans.forEach((span, index) => {
                let opacity = scrollPercentage - ((index - oneOpacityCount) * 0.02);
                opacity = Math.max(opacity, 0);
                if (opacity >= 1) {
                    oneOpacityCount++;
                }
                span.style.opacity = opacity.toString();
            });
        } else {
            scalePercentage = maxScaleValue;
            clipPercentage = maxClippingValue;
        }

        videoContainerRef.current.style.clipPath = `circle(${clipPercentage}%)`;
        heroRowsParentRef.current.style.transform = `scale(${scalePercentage})`;
        videoContainerRef.current.style.opacity = `${videoContainerOpacity}`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleHeroScroll);
        return () => {
            window.removeEventListener('scroll', handleHeroScroll);
        };
    }, []);

    return (
        <header className="hero-container" ref={scrollHeroSectionRef}>
            <div className="sticky hero">
                <div className="video-container" ref={videoContainerRef} style={{ clipPath: 'circle(100%)' }}>
                    <video autoPlay muted loop playsInline>
                        <source src="https://cdn.significo.com/videos/significo-main-hero.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="centered-div hide" ref={heroSectionContainerRef}>
                    <div className="hero-subtitle">
                        <div className="f-24">
                            <div className="subtitle-text">
                                <div className="subtitle-text-lines" ref={linesRef}>
                                    <div>
                                        <span>L</span><span>e</span><span>t</span><span>'</span><span>s</span>
                                        <span> </span><span>t</span><span>a</span><span>l</span><span>k</span>
                                        <span> </span><span>a</span><span>b</span><span>o</span><span>u</span><span>t</span>
                                        <span> </span><span>y</span><span>o</span><span>u</span><span>r</span>
                                    </div>
                                    <div>
                                        <span>N</span><span>e</span><span>x</span><span>t</span>
                                        <span> </span><span>b</span><span>i</span><span>g</span>
                                        <span> </span><span>i</span><span>d</span><span>e</span><span>a</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-row-parent" ref={heroRowsParentRef} style={{ paddingTop: '5rem' }}>
                        <div className="hero-rows" ref={heroRowsChild}>
                            <div className="hero-row"  >
                                <div className="hero-row-text"> 
                                    CRAZY 
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    USEFUL
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div >
                                <div className="hero-row-text">
                                    INTUTIVE
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    USEFUL
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                            </div>
                            <div className="hero-row" >
                                <div className="hero-row-text"> 
                                    LOWKEY 
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    AMAZING
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div >
                                <div className="hero-row-text">
                                    WINK
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    CREATIVE
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                            </div>
                            <div className="hero-row" >
                                <div className="hero-row-text"> 
                                    CRAZY 
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    USEFUL
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div >
                                <div className="hero-row-text">
                                    INTUTIVE
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    USEFUL
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                            </div>
                            <div className="hero-row" >
                                <div className="hero-row-text"> 
                                    LOWKEY 
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    AMAZING
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div >
                                <div className="hero-row-text">
                                    WINK
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                                <div className="hero-row-text">
                                    CREATIVE
                                </div>
                                <div className="circle-container" >
                                    <div className="circle" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-bottom">
                        <div className="scroll-arrow" style={{ width: '40%' }}>
                            <img src="" alt="" />
                            Scroll
                        </div>
                        <div className="gif-container" style={{ width: '40%' }}>
                            <img src="" alt="gif" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
