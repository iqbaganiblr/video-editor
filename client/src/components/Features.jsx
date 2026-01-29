export default function Features() {
  const features = [
    { title: "Online Editing", desc: "No software installation required" },
    { title: "Fast Export", desc: "Powered by cloud processing" },
    { title: "Secure", desc: "Your videos stay private" },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 grid md:grid-cols-3 gap-6 px-4">
      {features.map((f, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
