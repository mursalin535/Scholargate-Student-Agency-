import { useParams } from 'react-router-dom';
import Italy from './Italy';
import NewZealand from './NewZealand';
import Canada from './Canada';
import Australia from './Australia';

export default function Scholarship() {
    const { country } = useParams();

    // Render the appropriate component based on the country parameter
    switch (country) {
        case 'nz':
        case 'new-zealand':
            return <NewZealand />;
        case 'canada':
            return <Canada />;
        case 'australia':
            return <Australia />;
        case 'italy':
        default:
            return <Italy />;
    }
}