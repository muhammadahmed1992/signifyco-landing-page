import React, { useEffect } from 'react';
import '../app/globals.css';
import AnimateWhenInViewport from './AnimateWhenInViewport';

const CardSection: React.FC = () => {
    const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
        const { top } = el.getBoundingClientRect();
        const { innerHeight } = window;

        return top < innerHeight - top;
    };

    useEffect(() => {
        const handleCardScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const sectionElement = document.querySelector('[data-module-name="card-section"]');
            const cards = document.querySelectorAll('.cards-item');

            if (sectionElement && elementIsVisibleInViewport(sectionElement as HTMLElement)) {
                document.body.classList.remove('theme-black');
                if (!document.body.classList.contains('theme-light-gray')) {
                    document.body.classList.add('theme-light-gray');
                }
            } else {
                document.body.classList.remove('theme-light-gray');
                if (!document.body.classList.contains('theme-black')) {
                    document.body.classList.add('theme-black');
                }
            }

            cards.forEach((card: Element) => {
                if (elementIsVisibleInViewport(card as HTMLElement)) {
                    card.classList.add('card-animate');
                } else {
                    card.classList.remove('card-animate');
                }
            });
        };

        window.addEventListener('scroll', handleCardScroll);
        handleCardScroll(); 
        
        return () => {
            window.removeEventListener('scroll', handleCardScroll);
        };
    }, []);

    return (
        <section data-module-name="card-section">
            <div className="container">
                <div className="card-section-container sticky">
                    <div className="section-descr">
                        <div className="description-lines">GHMZA FOR YOU</div>
                        <div className="description-lines">that technology can transform healthcare to put people first. We put</div>
                        <div className="description-lines">humanity back at the center of healthcare with technology that</div>
                        <div className="description-lines">simplifies complexity, accelerates capacity, and improves outcomes.</div>
                    </div>
                    <div className="section-title">
                    <AnimateWhenInViewport 
                        textToBeAnimated="WE DO A LOT!" 
                        cssClass="title-lines" />
                    <AnimateWhenInViewport 
                        textToBeAnimated="OF COOOOL" 
                        cssClass="title-lines" />
                    </div>
                    <div className="button">
                        <div className="button-text">Contact</div>
                        <img className="button-arrow" src="assets/SVG.png" alt="" />
                    </div>
                    <div className="image-container" style={{ marginTop: '20%' }}>
                        <img src="assets/Group.png" alt="" />
                    </div>
                </div>
                <div className="cards-list">
                    <div className="cards-item">
                        <div className="card-item-desc-container">
                            <div className="card-item-title">Music</div>
                            <div className="description">
                                <div className="card-item-desc">We build mobile and web-based apps,</div>
                                <div className="card-item-desc">platforms, and infrastructure fitted to your</div>
                                <div className="card-item-desc">needs. We have an open solutions</div>
                                <div className="card-item-desc">framework, so we work to fit your business,</div>
                                <div className="card-item-desc">not the other way around.</div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="assets/Group 1000004205.png" alt="" />
                        </div>
                    </div>
                    <div className="cards-item">
                        <div className="card-item-desc-container">
                            <div className="card-item-title">Music</div>
                            <div className="description">
                                <div className="card-item-desc">We build mobile and web-based apps,</div>
                                <div className="card-item-desc">platforms, and infrastructure fitted to your</div>
                                <div className="card-item-desc">needs. We have an open solutions</div>
                                <div className="card-item-desc">framework, so we work to fit your business,</div>
                                <div className="card-item-desc">not the other way around.</div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="assets/Group 1000004206.png" alt="" />
                        </div>
                    </div>
                    <div className="cards-item">
                        <div className="card-item-desc-container">
                            <div className="card-item-title">Music</div>
                            <div className="description">
                                <div className="card-item-desc">We build mobile and web-based apps,</div>
                                <div className="card-item-desc">platforms, and infrastructure fitted to your</div>
                                <div className="card-item-desc">needs. We have an open solutions</div>
                                <div className="card-item-desc">framework, so we work to fit your business,</div>
                                <div className="card-item-desc">not the other way around.</div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="assets/Layer_1.png" alt="" />
                        </div>
                    </div>
                    <div className="cards-item">
                        <div className="card-item-desc-container">
                            <div className="card-item-title">Music</div>
                            <div className="description">
                                <div className="card-item-desc">We build mobile and web-based apps,</div>
                                <div className="card-item-desc">platforms, and infrastructure fitted to your</div>
                                <div className="card-item-desc">needs. We have an open solutions</div>
                                <div className="card-item-desc">framework, so we work to fit your business,</div>
                                <div className="card-item-desc">not the other way around.</div>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="assets/Vector.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSection;
