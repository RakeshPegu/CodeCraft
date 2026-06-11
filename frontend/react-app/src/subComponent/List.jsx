function List({ techname, content }) {
  return (
    <div className="rounded-xl border  border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-all duration-300 ">
      <div className="flex flex-col gap-2 md:flex-row md:items-start">
        <h3 className="min-w-[180px] text-lg font-semibold text-white">
          {techname}
        </h3>

        <p className="leading-relaxed text-slate-300">
          {content}
        </p>
      </div>
    </div>
  );
}

export default List;