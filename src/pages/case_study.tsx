import { useParams } from "react-router";
import Divider from "@/components/custom/Divider";
import CaseStudyHero from "@/components/custom/case_study/CaseStudyHero";
import CaseStudyOverview from "@/components/custom/case_study/CaseStudyOverview";
import CaseStudyFeatures from "@/components/custom/case_study/CaseStudyFeatures";
import CaseStudyTechStack from "@/components/custom/case_study/CaseStudyTechStack";
import CaseStudyGallery from "@/components/custom/case_study/CaseStudyGallery";
import { getCaseStudy } from "@/data/caseStudies";
import NotFound from "@/pages/not_found";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) return <NotFound />;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="md:h-20 h-28" />
      <Divider />

      <div className="flex flex-col w-full border-x border-gray-100 dark:border-zinc-900">
        <CaseStudyHero study={study} />
        <Divider />
        <CaseStudyOverview study={study} />
        <Divider />
        <CaseStudyFeatures study={study} />
        <Divider />
        <CaseStudyTechStack study={study} />
        <Divider />
        <CaseStudyGallery study={study} />
      </div>

      <Divider />
    </div>
  );
}
