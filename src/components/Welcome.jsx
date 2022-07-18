export default function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to React</h1>
      <a
        onClick={startGame}
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 px-20 py-3.5 mt-10"
      >
        Iniciar
      </a>
    </div>
  );
}
