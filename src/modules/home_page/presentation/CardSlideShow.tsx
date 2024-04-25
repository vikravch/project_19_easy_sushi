import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import arrowLeftIcon from '../img/arrowLeft.png';
import arrowRightIcon from '../img/arrowRight.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../style/cardSlideShow.css';

function CardSlideShow() {
    const [startIndex, setStartIndex] = useState(0);

    const cards = [
        { title: 'Philadelphia and Salmon Set', description: '1050 g, 30 pcs', price: '299 ₪', image: 'philadelphia.png' },
        { title: 'Top set', description: '1020 g, 40 pcs', price: '319 ₪', image: 'salmonComb.png' },
        { title: 'Salmon combination', description: '1200 g, 52 pcs', price: '329 ₪', image: 'topSet.png' },
        { title: 'Special combination', description: '1300 g, 56 pcs', price: '169 ₪', image: 'philadelphia.png' },
        { title: 'The biggest Philadelphia', description: '1400 g, 23 pcs', price: '543 ₪', image: 'salmonComb.png' },
        { title: 'Special combination', description: '1500 g, 12 pcs', price: '234 ₪', image: 'topSet.png' },
        
    ];

    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(cards.length - 3, prevIndex + 1));
    };

    return (
        <div>
            <Nav 
                variant="underline"
                className="buttons"
                activeKey="#"
                >
                <Nav.Item>
                    <Nav.Link href="#">New items</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="./popular">Popular</Nav.Link>
                </Nav.Item>
      
            </Nav>         
            <div className="wrapper_CardBar">
                <div className="cardSlider">
                    <Button variant="light" className="arrowLeft" onClick={handlePrev}>
                        <img src={arrowLeftIcon} alt="" />
                    </Button>
                    <CardGroup>
                        {cards.slice(startIndex, startIndex + 3).map((card, index) => (
                            <div key={index} className={`card ${index === 1 ? 'active' : ''}`}>
                                <Card border="white" style={{ margin: '10px 15px'}}>
                                    <Card.Img variant="top" src={require(`../imagesForCarousel/${card.image}`)} />
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">{card.price}</small>
                                        <Button variant="warning" className="buttonAdd">Add</Button>{' '}
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))}
                    </CardGroup>
                    <Button variant="light" className="arrowRight" onClick={handleNext}>
                    <img src={arrowRightIcon} alt="" />
                    </Button>
                </div>
            </div>
         </div>
    );
}

export default CardSlideShow;

//-----------------------------------------------------------------------------------------
//my down


// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import pic1 from '../img/salmonComb.png'
// import arrowLeft from '../img/arrowLeft.png'
// import arrowRight from '../img/arrowRight.png'

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// function CardSlideShow() {
//   return (
//     <div className="wrapper_CardBar">
//     <Nav 
//       variant="underline"
//       className="buttons"
//       activeKey="#"
//       onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//         >
//       <Nav.Item>
//         <Nav.Link href="#">New items</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Popular</Nav.Link>
//       </Nav.Item>
      
//     </Nav>
          
//     <CardGroup>
//       <Card border="light" style={{ margin: '10px 15px'}}>
//         <Card.Img variant="top" src={pic1}/>
//         <Card.Body >
//           <Card.Title>Salmon combination</Card.Title>
//           <Card.Text>
//           {'1050 g, 30 pcs'}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">149 ₪</small>
//           <Button variant="danger" className="buttonAdd">Add</Button>{' '}
//         </Card.Footer>
//       </Card>
//       <Card border="light" style={{ margin: '10px 15px'}}>
//         <Card.Img variant="top" src={pic1} />
//         <Card.Body>
//           <Card.Title>Salmon combination</Card.Title>
//           <Card.Text>
//           {'1050 g, 30 pcs'}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">149 ₪</small>
//           <Button variant="danger" className="buttonAdd">Add</Button>{' '}
//         </Card.Footer>
//       </Card>
//       <Card border="light" style={{ margin: '10px 15px'}}>
//         <Card.Img variant="top" src={pic1} />
//         <Card.Body>
//           <Card.Title>Salmon combination</Card.Title>
//           <Card.Text>
//           {'1050 g, 30 pcs'}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">149 ₪</small>
//           <Button variant="danger" className="buttonAdd">Add</Button>{' '}
//         </Card.Footer>
//       </Card>
//     </CardGroup>
//       <div className="arrowLeft" id=""><img src={arrowLeft} alt="" /></div>
//       <div className="arrowRight" id=""><img src={arrowRight} alt="" /></div>
//     </div>
//   );
// }

// export default CardSlideShow;
// // function Card() {
// //     return (
// //             <div>
// //                 <div className="buttons">
// //                     <span className="newItem"><a href="" >New items</a></span>
// //                     <span className="popular"><a href="">Popular</a></span>
// //                 </div>
                
// //                 <div className="wrapper_slideBar">
// //                 <div className="slideBar">
// //                     <div className="slideBarOne">Salmon</div>
// //                     <div className="slideBarTwo">Philadelphia</div>
// //                     <div className="slideBarThree">Biggest Philadelphia</div>
// //                 </div>
// //                 <div className="slideButtons">
// //                     <div className="buttonLeft"><img src="" alt="#" /></div>
// //                     <div className="buttonRight"><img src="" alt="#" /></div>
// //                 </div>
// //                 </div>
// //             </div>
        
// //     )
// // }

// // export default Card;