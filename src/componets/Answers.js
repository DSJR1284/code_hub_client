import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Answers extends Component {
     render() {

        const response = this.props.answers

         return (
             <div>
                {response.map(r => <ul key={r.question_id}>
                    <li>
                        answers: {r.response}
                        
                    </li>
                </ul> )}
             </div>
         )
     }     
}

// {artworks.map(artwork => 
    //             <ul  key={artwork.id }>
    //             <li> 
    //                 title: { artwork.title } 
    //                 < br />
    //                 img: <img src={artwork.img} alt="sometext"  width="300" height="300"/>
    //                 < br /> 
    //                 description: {artwork.description}
    //                 < br />
    //                 price: {artwork.price }
    //                 <button onClick={(e) => handleClick(e, artwork)}> Add to Cart</button> 
    
    //                 {/* <button onClick={() => addToCart(artwork)}> Add to Cart</button>  */}
    //             </li>
    //             </ul>)}

const mapStateToProps = state => {
    return {answers: state.answers}

    
}


export default connect(mapStateToProps)(Answers);