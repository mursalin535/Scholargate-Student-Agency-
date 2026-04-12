import ScholarshipTemplate from './ScholarshipTemplate';
import { countries, contentData } from './scholarshipData';

export default function Italy() {
    return <ScholarshipTemplate contentData={contentData} countries={countries} defaultCountry="italy" />;
}
