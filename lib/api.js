import suspectedQuestions from "../_questions/suspected-questions.json";

const questions = {
  title: "Aşı olmak istiyor musunuz?",
  slug: "/",
  child: [
    {
      title: "Hiç tereddütüm yok.",
      slug: "hic-tereddutum-yok",
      choice: "Evet",
      icon: "yes-icon.svg",
      child: [
        {
          type: "link",
          title: "Aşı grubu öncelik sıralaması",
          slug: "https://covid19asi.saglik.gov.tr/TR-77707/asi-uygulanacak-grup-siralamasi.html",
          categories: ["a"],
        },
      ],
    },
    {
      title: "Ancak bazı sorularım var.",
      slug: "ancak-bazi-sorularim-var",
      choice: "Evet",
      icon: "suspect.svg",
      child: suspectedQuestions,
    },
    {
      label: "Ancak bazı sorularım var.",
      slug: "ancak-bazi-sorularim-var",
      choice: "Hayır",
      icon: "denial.svg",
    },
  ],
};

const find = (array, slug) => {
  var result;
  array.some((o) => (result = o.slug === slug ? o : find(o.child || [], slug)));
  return result;
};

export function getQuestionSlugs() {
  const paths = [];
  JSON.stringify(questions, (key, value) => {
    if (key === "slug")
      paths.push({
        params: {
          slug: value,
        },
      });
    return value;
  });

  return paths;
}

export function getQuestionBySlug(slug) {
  return find(questions.child, slug);
}
