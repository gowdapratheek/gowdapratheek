
const articles = [
  {
    date: "DEC 13",
    title: "The 4 Quarters Technique, Invisible Opportunities, & More",
  },
  {
    date: "DEC 11",
    title: "The Personal Annual Review",
  },
  {
    date: "DEC 6",
    title: "The Tragedy of Good Luck, Self-Acceptance, & More",
  },
];

function ArticleList() {
  return (
    <div className="max-w-lg mx-auto pt-[15vh]">
      {articles.map((article, index) => (
        <button
          key={index}
          className="flex items-center space-x-4 p-4 border rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-200 mb-3 w-[80vh]"
        >
          <span className="text-sm font-medium text-blue-400">
            {article.date}
          </span>
          <span>|</span>
          <span className="">{article.title}</span>
        </button>
      ))}
    </div>
  );
}

export default ArticleList;
