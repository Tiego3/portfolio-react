export default function About() {
  return (
    <section id="about" className="container-x section-y">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">About</h2>
        <p className="mt-3 text-sm muted">
          Clear communication. Solid fundamentals. Consistent progress. Problem-solving
        </p>
      </div>

      {/* Body text: left aligned + justified */}
      <div className="mx-auto mt-8 max-w-3xl text-justify">
        <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m a software developer with a Diploma in IT (Software Development) and hands-on experience in quality assurance.
          I’ve worked with C#, ASP.NET, SQL, HTML, CSS, and JavaScript, and I bring a strong testing mindset from my background in manual and automated testing. 
          That experience shaped how I approach development: clear logic, clean code, and attention to real user behaviour. I’m comfortable collaborating in Agile teams, learning new tools quickly, and taking feedback seriously. My focus is growing as a developer while building a foundation in data science.
        </p>

        <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m currently looking for an entry-level role where I can contribute
          to real projects, learn from experienced teammates, and grow through
          feedback, reviews, and hands-on delivery.
        </p>
      </div>
    </section>
  );
}
