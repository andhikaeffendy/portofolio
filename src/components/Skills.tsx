// components/Skills.tsx

export default function Skills() {
  const skills = [
    { title: "HTML", percentage: 100 },
    { title: "CSS", percentage: 90 },
    { title: "JAVASCRIPT", percentage: 75 },
    { title: "PHP", percentage: 80 },
    { title: "WORDPRESS/CMS", percentage: 90 },
    { title: "PHOTOSHOP", percentage: 55 },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-20 bg-[#f1f5f8]">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Skills</h2>
      <div className="w-20 h-1 bg-blue-500 mb-6" />
      <p className="text-lg text-gray-700 mb-12">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
        {skills.map((skill) => (
          <SkillBar
            key={skill.title}
            title={skill.title}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
}

function SkillBar({
  title,
  percentage,
}: {
  title: string;
  percentage: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-md font-semibold text-gray-900">{title}</span>
        <span className="text-md font-semibold text-gray-900">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-300 h-2.5 rounded-full">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
