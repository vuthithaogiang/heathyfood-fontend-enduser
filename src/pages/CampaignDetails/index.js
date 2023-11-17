import classNames from 'classnames/bind';
import styles from './CampaignsDetails.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function CampaignsDetails() {
    const params = useParams();

    return (
        <div className={cx('wrapper')}>
            <div>Details Campaign {params.slugCampaign}</div>
        </div>
    );
}

export default CampaignsDetails;
