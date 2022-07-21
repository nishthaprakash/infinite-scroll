import Record from './records.json';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  return (
    <div className="App">
      <nav>
  <ul>
    <li>Home</li>
    <li>Orders</li>
    <li>Win Cash back</li>
    <li className='nav-list'><button>log out</button> </li>
    <li className='nav-list'>Cart</li>

    
  </ul>
</nav>

     <p className='hero'>
      <h2>Welcome back!</h2>
      <b>Lets' Explore the new trends</b>
    </p>
    <div className='sort-div'>
      Sort by
      <button className='sort'
            // onClick={Record.price.title((b,a)=>b-a)
            // }
            >price low to high</button>
      {/* <button className='sort'>price high to low</button> */}
    </div>
    <div className='filter-div'>
      Filter by
      <button className='filter'
        //       onClick={Record.price.filter((data)=> data >= 200 )
        // }
        >price less than 200 </button>
      {/* <button className='filter'>price greater than 200 </button>       */}
    </div>
    <br />
    
      <div className="inner">
        {
          // <InfiniteScroll 
          //   dataLength={Record.icon.length}
          //   next={()=>}
          //   hasMore={true}
          //   loader={<h4>Loading...</h4>}
          //   endMessage={
          //     <h4>Yay! You've seen it all!!</h4>
          //   }>
            
              Record && Record.map(records=>{
                return(
                  
                  <div className="box" key={records.id}>
                    <img src={records.icon} alt="Pic" />
                    <br />
                    Item No. {records.id}<br />
                    {records.title}<br />
                    Price: {records.price}<br />
                    <button className='add-to-cart'>Add to cart</button>

                  </div>     
                )
              })
        
          // </InfiniteScroll>
        }
      </div>     
    </div>
  );
}

export default App;
