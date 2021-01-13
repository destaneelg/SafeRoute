import React from 'react';
import '../SearchField/Search.css';
import axios from 'axios';
import APIJSONDATA from '../../API_DATA.json';

class Search extends React.Component {

    constructor( props ) {
        super( props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
        //variable to start cancel token
        this.cancel = '';
        // APIJSONDATA.forEach(data => {
        //     console.log("name: ", data.name);
        //     console.log("city: ", data.city);
        // })
    }

    //fetching query results from refuge restroom api
    fetchSearchResults = ( updatedPageNo = '', query ) => {
        console.log("fetchSearchResults")
     const pageNumber = updatedPageNo ? `page=1${updatedPageNo}` : '';
    //  APIJSONDATA.forEach(data => {
    //     console.log("name: ", data.name);
    //     console.log("city: ", data.city);
    // })
       const searchURL = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=100&query=${query}` ; 

    // fetch("../..API_DATA.json") 
    // .then(function(resp) {
    //     return resp.json();
    // })
    // .then(function(data) {
    //     console.log(data);
  
    // }); 


       // if statement for cancel token 
        if( this.cancel ) {
            this.cancel.cancel();
        }
        // creates new stoke
        this.cancel = axios.CancelToken.source();

                    //searchURL
        axios.get( searchURL, {
            cancelToken: this.cancel.token
        } )

        .then( res => {
            const resultNotFoundMsg = ! res.data.length
                                    ? 'There are no more search results. Try a new search'
                                        : '';
                                        this.setState( {
                                            results: res.data,
                                            message: resultNotFoundMsg,
                                            loading: false
                                        })




            //Displaying API data
            // console.warn( res );
        } )
        .catch( error => {
            if (axios.isCancel(error) || error ) {
                this.setState({
                    loading: false,
                    message: 'Failed to fetch data. Check network'
                })
            }
        })
    };
//Method to handle user input
handleOnInputChange = ( event ) => {
    //stores query/user input
    const query = event.target.value;
    this.setState( { query: query, loading: true, message: '' }, () => {
        this.fetchSearchResults( 1, query );
    } );
};



// Method to display search results
// Pulls results out of state


   renderSearchResults = () => {
    
const { results } = this.state;

if ( Object.keys( results ).length && results.length ) {
 return (
 <div className="results-container">
     { results.map( result => {
         return (
             <a key={ result.id } href={ result.name } className="result-item">
                <h3 className="image-name">{result.name}</h3>
                <div className="image-wrapper">{ result.street }
                </div>
             </a>
         )
     })}
 </div>
 )
    }
   };
 



 render () {
     const { query } = this.state;
     console.warn( this.state );
     return (
         <div className="container">
  {/* Heading*/}
  <h2 className="heading"></h2>
   {/* Search Input*/}
   <label className="search-label" htmlFor="search-input">
   <input
                    type="text"
                    name="query"
                    value={query}
                    id="search-input"
                    placeholder="Search..."
                // Calling function for what user types
                    onChange={this.handleOnInputChange}
                    />
<i className="fas fa-search search-icon" id="searchicon"></i>
   </label>


{ this.renderSearchResults() } 
         </div>
         )
     }
}
    export default Search