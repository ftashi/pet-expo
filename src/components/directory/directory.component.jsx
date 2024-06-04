
import DirectoryItem from "../directory-item/directory-item.component"

const categories = [
    {
      id: 1,
      title: 'Dogs',
      imageUrl: 'https://i0.wp.com/masteringportraitphotography.com/wp-content/uploads/2019/11/180816H281_0187-2-2.jpg?resize=1100%2C733&ssl=1',
      route: '/dogs'
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/originals/c1/8c/44/c18c4491703eeb32fce74753e622b055.jpg',
      title: 'Cats',
      route: '/cats'
  
    },
    {
      id: 3,
      imageUrl: 'https://img.freepik.com/premium-photo/black-bird-with-yellow-feet-is-flying-front-black-background_540381-1371.jpg',
      title: 'Birds',
      route: '/birds'
  
    },
]

const Directory = () => {

    return (
  
     < div className="directory-container">
    {categories.map((category) => (
    <DirectoryItem key={category.id} category={category}/>
    ))}
  
    </div>
  
    
  );
  };
  export default Directory;