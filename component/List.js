function List({items}) {

  const list = items.map(function(item, index){
    return(
      <li key={index}>{item}</li>
    );
  })

  return(
    <div>
      <ul>
        { list }
      </ul>
      
    </div>
  );
}

export default List;