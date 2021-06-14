function ResultPageFooter({ cstmClass }) {
  return (
    <footer
      className={`py-3 border-t border-gray-300 mt-5 px-4 self-end ${cstmClass}`}
    >
      <p className="m-0 text-center text-base text-gray-600">
        Build with React Js, Next Js, Tailwind css and Google search api. || By{" "}
        <span className="font-semibold text-gray-900">Saymon</span>
      </p>
    </footer>
  );
}

export default ResultPageFooter;
