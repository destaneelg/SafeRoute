import React from 'react';
import '../SearchField/Search.css';
import axios from 'axios';
import Loader from '../../img/loader.gif';


class Search extends React.Component {


    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        };

            //variable to start cancel token
            this.cancel = '';
        }

    //fetching query results from refuge restroom api


    fetchSearchResults = ( updatedPageNo = '', query ) => {
     const pageNumber = updatedPageNo ? `page=${updatedPageNo}` : '';
       const searchURL = `https://www.refugerestrooms.org/api/v1/restrooms/search?${pageNumber}&per_page=40&offset=0&query=${query}` ; 



            //Allyse code in attempt to retreieve query results fast
            // function search () {
            //     var input = document.getElementById('search-input').value;
                
            //     axios.get(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=40&offset=0&query=Texas`)
            //     .then(function(response){

            //         var myJSON = JSON.stringify("Name: " + response.data[0].name + "<br><br>") +
            //         "Street: " + response.data[0].street + "<br></br>" + response.data[0].city +
            //         "<br><br>" + response.data[0].state + "<br><br>" + response.data[0].direction);
            //         document.getElementById("content").innerHTML = myJSON;
            //     }).catch(err => console.log(err));
            //     } 









    
       // if statement for cancel token 

        if( this.cancel ) {
            this.cancel.cancel();
        }
        // creates new token

        this.cancel = axios.CancelToken.source();

                    //searchURL
        axios.get( searchURL, {
            cancelToken: this.cancel.token
        } )

    .then( res => {
            const resultNotFoundMsg = ! res.data.length
                                    ? 'No results. Try a new search'
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
                    message: 'Hang tight! Getting those results for you...'
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
                            
                                <h8 className="image-name">
                                    <p className="result-item">
                                    {result.name},
                                    {result.street},
                                    {result.city},
                                    {result.state},
                                    <h9>Unisex: {result.unisex.value}
                                    Accessible: {result.accessible.value}</h9>
                                    </p>
                                </h8>
                            
                        )
                    })}

                </div>
            )
        }
   };
 



    render () {
     const { query, loading, message} = this.state;
     
     return (
         <div className="container">
        {/* Heading*/}
        <h2 className="heading">{/*empty*/}</h2>
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



                                            {/*Continuation of Allyse's test code*/}
                                                    {/* onClick = {search} */}
<i className="fas fa-search search-icon" id="searchicon"></i>
 
</label>


 


{message && <p className="message"> { message }</p>}


<img src={Loader} className={`search-loading ${ loading ? 'show' : 'hide' } `} alt="loader"/>

{ this.renderSearchResults() } 

         <div id = 'content'></div></div>

         )
     }
}

    export default Search
