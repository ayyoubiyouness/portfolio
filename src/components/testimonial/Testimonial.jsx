import React from 'react';
import './testimonial.scss';

import FeedbackCard from './FeedbackCard.jsx';
import Carousel from "nuka-carousel";

const feedback = [
    {
        id: "feedback-0",
        content:
            "Lorem ipsum dolor sit amet. Aut exercitationem rerum sed dolorem dolore aut maxime quibusdam qui quas molestiae. Aut adipisci nobis et minus rerum ut autem similique eum aspernatur aspernatur!",
        name: "Hamza OUHMIDOU",
        title: "Facility Manager at BAYER",
        img: "https://i.postimg.cc/43xtv67b/1567203234796.jpg",
    },
    {
        id: "feedback-1",
        content:
            "Lorem ipsum dolor sit amet. Aut exercitationem rerum sed dolorem dolore aut maxime quibusdam qui quas molestiae. Aut adipisci nobis et minus rerum ut autem similique eum aspernatur aspernatur!",
        name: "Fabien STARK ",
        title: "Chargé de recherche à INRAE",
        img: "https://umr-selmet.cirad.fr/var/umr_selmet/storage/images/umr-selmet/l-unite/pages-agents/fabien-stark/49095-9-fre-FR/fabien-stark.jpg",
    },
    {
        id: "feedback-2",
        content:
            "Lorem ipsum dolor sit amet. Aut exercitationem rerum sed dolorem dolore aut maxime quibusdam qui quas molestiae. Aut adipisci nobis et minus rerum ut autem similique eum aspernatur aspernatur!",
        name: "Amandine LURETTE",
        title: "Chargé de recherche à INRAE",
        img: "https://umr-selmet.cirad.fr/var/umr_selmet/storage/images/umr-selmet/l-unite/pages-agents/amandine-lurette/46613-1-fre-FR/amandine-lurette.jpg",
    },
    
];





const Testimonial = () => {
    return (
        <section id="clients">

            <div className="testimonial-header">
                <h2>
                    What Insights Have I Gained  <br className="sm:block hidden" /> from My Internship Mentors?
                </h2>
                <div>
                    <p>
                        Mentorship Highlights: Valuable Lessons from Industry Experts
                    </p>
                </div>
            </div>
            <Carousel autoplay autoplayInterval={4000} wrapAround={true}  className='card-content'>
                {feedback.map((card) => (
                    <FeedbackCard key={card.id} {...card} />
                ))}
            </Carousel>
        </section>
    );
};

export default Testimonial;



