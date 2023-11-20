import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import { useEffect, useState } from 'react';
import useAxios from '~/hooks/useAxios';
import { useParams } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import HTMLRendered from '~/components/HTMLRendered';
import { Editor } from 'primereact/editor';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CreatePost() {
    const axios = useAxios();
    const params = useParams();

    const [loading, setLoading] = useState(false);

    const [campiaignInfo, setCampaignInfo] = useState(null);
    const [content, setContent] = useState('fsdfgsgd');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchCampaignInfor(); // eslint-disable-next-line
    }, [params.nameCampaign]);

    const fetchCampaignInfor = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`/api/campaign/slug=${params.nameCampaign}`, {
                withCredentials: true,
            });

            console.log(response.data);

            setCampaignInfo(response.data.data);

            setLoading(false);
        } catch (error) {
            console.log(error);

            setLoading(false);
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    {campiaignInfo !== null && (
                        <>
                            <div className={cx('header')}>
                                <h4>Make Post for {campiaignInfo.name}</h4>
                                <button className={cx('save', 'disable')}>
                                    Publish
                                    <img className={cx('icon')} alt="" src={images.publishIcon} />
                                </button>
                            </div>
                            <div className={cx('form')}>
                                <div className={cx('form-row')}>
                                    <div className={cx('form-group')}>
                                        <input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            type="text"
                                            className={cx('form-input', 'title')}
                                            placeholder="Title"
                                        />
                                    </div>
                                </div>

                                <div className={cx('form-row')}>
                                    <div className={cx('form-group')}>
                                        <input
                                            value={description}
                                            type="text"
                                            className={cx('form-input', 'description')}
                                            placeholder="Wrire small description"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cx('form-row')}>
                                    <input type="file" hidden id="postThumb" name="postThumb" />
                                    <label className={cx('form-label', 'thumbnail')} htmlFor="postThumb">
                                        <img className={cx('icon')} alt="" src={images.plusIcon} />
                                        Add Thumb
                                    </label>
                                </div>

                                <div className={cx('form-row', 'content')}>
                                    <div className={cx('form-group')}>
                                        <Editor
                                            value={content}
                                            onTextChange={(e) => setContent(e.htmlValue)}
                                            style={{ height: 'fit-content' }}
                                            placeholder="Write content is here"
                                        />
                                    </div>

                                    <div className={cx('form-group', 'html-render')}>
                                        <HTMLRendered htmlString={content} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {loading && (
                <div className={cx('modal-infinity')}>
                    <div className={cx('overlay-infinity')}></div>
                    <div className={cx('wrap-loading-infinity')}>
                        <InfinitySpin width="160" color="#fff" />
                    </div>
                </div>
            )}
        </>
    );
}

export default CreatePost;
