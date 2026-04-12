import ScholarshipTemplate from './ScholarshipTemplate';
import { countries, contentData } from './scholarshipData';

export default function Australia() {
    return <ScholarshipTemplate contentData={contentData} countries={countries} defaultCountry="australia" />;
}
