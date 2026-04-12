import ScholarshipTemplate from './ScholarshipTemplate';
import { countries, contentData } from './scholarshipData';

export default function Canada() {
    return <ScholarshipTemplate contentData={contentData} countries={countries} defaultCountry="canada" />;
}
