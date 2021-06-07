import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import Image from "next/image";
import { getQuestionSlugs, getQuestionBySlug } from "../lib/api";

import Layout from "../components/layout";

export default function Question({ question, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !question?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} title={question.title}>
      {router.isFallback ? (
        <>Loading</>
      ) : (
        <div className="how-search-section padding-bottom mt--83">
          <div className="container">
            <div className="how-search-wrapper">
              <div className="row mb-30-none justify-content-center">
                {question.child &&
                  question.child.map((item) => {
                    return (
                      <Link
                        href={question.slug}
                        key={`question${question.label}${question.choice}`}
                      >
                        <div className="col-sm-10 col-md-6 col-lg-4">
                          <div className="how-search-item">
                            {item.icon && (
                              <div className="thumb">
                                <Image
                                  alt={item.title}
                                  src={`/images/${item.icon}.svg`}
                                  width={177}
                                  height={49}
                                />
                              </div>
                            )}
                            <div className="content">
                              <h4 className="title">
                                {item.slug && (
                                  <Link href={item.slug}>{item.title}</Link>
                                )}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      question: getQuestionBySlug(params.slug),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getQuestionSlugs(),
    fallback: false,
  };
}
