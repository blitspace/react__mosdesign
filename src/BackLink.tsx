import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function BackLink() {
    const navigate = useNavigate();

    return (
        <div className="mb-mos-sm">
            <Link to="#" onClick={() => navigate(-1)} className="flex gap-2"><KeyboardBackspaceIcon /> Back</Link>
        </div>
    );
}

export default BackLink;
