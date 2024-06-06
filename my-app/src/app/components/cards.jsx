import React from 'react';
import jsonData from './data.json'; // Импортируем данные из JSON файла

function App() {
  const cardsData = jsonData; // Просто используем данные из JSON файла

  return (
    <div className="container mx-auto py-20 w-90 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {cardsData.map((card, index) => (
          <a href={card.id}
            key={index} 
            className={`h-48 p-6 rounded-lg shadow-md cursor-pointer transition-colors h-60 ${card.bgColor} hover:${card.textColor}`}
          >
            <h2 className={`text-2xl font-semibold mb-4 ${card.textColor}`}>{card.title}</h2>
            <hr className="border-t-2 border-gray-300 my-4" />
            <p className={`text-gray-700 ${card.textColor}`}>{card.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
