export default function CategoryFilter() {
    const categories = [
      'All Popular', 'Action', 'Animation', 'Adventure',
      'Horror', 'Documentary', 'Romance', 'Kids', 'Comedy'
    ];
  
    return (
      <div className="d-flex flex-wrap gap-2 mb-5">
        {categories.map((cat, i) => (
          <button key={i} className="category-btn">{cat}</button>
        ))}
      </div>
    );
  }
  


