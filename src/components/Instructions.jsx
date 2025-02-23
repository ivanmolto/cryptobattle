const Instructions = () => {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="border border-1 border-blue-100 bg-white px-4 pr-4 pl-4 pt-2 pb-2 sm:px-6 rounded-lg">
        <div className="font-medium text-lg">Instructions</div>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Enter a wallet address for each player and submit</li>
          <li>Battle</li>
          <li>Check the winner</li>
        </ol>
      </div>
    </section>
  );
};

export default Instructions;
