import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAlignLeft,
    faClock,
    faHouseChimney,
    faNoteSticky,
    faSignal,
    faSliders,
    faToggleOff,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Slider from './slider';
const cx = classNames.bind(styles);
function Home() {
    // Sidebar
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Button
    const [buttonState, setButtonState] = useState('On');

    const toggleButton = () => {
        setButtonState(buttonState === 'On' ? 'Off' : 'On');
    };

    const [buttonStateTwo, setButtonStateTwo] = useState('Off');

    const toggleButtonTwo = () => {
        setButtonStateTwo(buttonStateTwo === 'Off' ? 'On' : 'Off');
    };

    const [buttonStateThree, setButtonStateThree] = useState('Off');

    const toggleButtonThree = () => {
        setButtonStateThree(buttonStateThree === 'Off' ? 'On' : 'Off');
    };

    const contentRoomCenterRef = useRef(null);

    useEffect(() => {
        const contentRoomCenter = $(contentRoomCenterRef.current);

        // Gắn kết sự kiện kéo chuột
        contentRoomCenter.on('mousedown', function (event) {
            var startX = event.pageX;

            $(document).on('mousemove', function (event) {
                var distance = event.pageX - startX;
                contentRoomCenter.scrollLeft(contentRoomCenter.scrollLeft() - distance);
            });
        });

        // Sự kiện thả chuột
        $(document).on('mouseup', function () {
            $(document).off('mousemove');
        });

        // Thực hiện cuộn ngang đến hình ở giữa
        contentRoomCenter[0].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
        });

        // Thực hiện căn giữa hình ảnh chính giữa sau khi trang được tải lại
        const handleWindowLoad = () => {
            const centerImage = contentRoomCenter.find('img');
            const containerWidth = contentRoomCenter.width();
            const imageWidth = centerImage.width();
            const scrollLeft = (imageWidth - containerWidth) / 2;

            contentRoomCenter.scrollLeft(scrollLeft);
        };

        $(window).on('load', handleWindowLoad);

        // Cleanup
        return () => {
            contentRoomCenter.off('mousedown');
            $(document).off('mousemove');
            $(document).off('mouseup');
            $(window).off('load', handleWindowLoad);
        };
    }, []);

    return (
        <section className={cx('wrapper', { 'sidebar-open': showSidebar })}>
            {/* Hien thi sidebar */}
            {showSidebar && (
                <div className={cx('sidebar ')}>
                    <div className={cx('content-category')}>
                        <div className={cx('content-category-top')}>
                            <div className={cx('avatar-wrapper')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                    alt="Hoa"
                                />
                                <div className={cx('shine-effect')}></div>
                                <div className={cx('info')}>
                                    <h4 className={cx('name')}>
                                        <span>Rebeca Barbara</span>
                                    </h4>
                                    <span className={cx('job')}>Designer</span>
                                </div>
                            </div>
                            <div className={cx('icon')} onClick={toggleSidebar}>
                                <Link to="/" className={cx('content-category-item--link')}>
                                    <FontAwesomeIcon className={cx('content-right-icon--align')} icon={faAlignLeft} />
                                </Link>
                            </div>
                        </div>

                        <div className={cx('content-category-link')}>
                            <ul>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHouseChimney} />
                                    <Link to="/" className={cx('content-category-item--link')}>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <Link to="/lamp" className={cx('content-category-item--link')}>
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faNoteSticky} />
                                    <Link to="/" className={cx('content-category-item--link')}>
                                        <span>Notification</span>
                                    </Link>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSignal} />
                                    <Link to="/" className={cx('content-category-item--link')}>
                                        <span>Stats</span>
                                    </Link>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                                    <Link to="/" className={cx('content-category-item--link')}>
                                        <span>Schedules</span>
                                    </Link>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSliders} />
                                    <Link to="/" className={cx('content-category-item--link')}>
                                        <span>Settings</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4 className={cx('logout')}>
                            <span>Logout</span>
                        </h4>
                    </div>
                </div>
            )}
            <div className={cx('wrapper-top')}>
                <div className={cx('icon')} onClick={toggleSidebar}>
                    <Link to="/" className={cx('content-category-item--link')}>
                        <FontAwesomeIcon className={cx('content-right-icon--align')} icon={faAlignLeft} />
                    </Link>
                </div>
                <div className={cx('avatar-wrapper')}>
                    <img
                        className={cx('avatar')}
                        src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                        alt="Hoa"
                    />
                    <div className={cx('shine-effect')}></div>
                </div>
            </div>

            <div className={cx('wrapper-center')}>
                <div className={cx('content-text')}>
                    <h2>Welcome</h2>
                    <h1>Rebeca Barbara</h1>
                    <h3>
                        Hey, Rebeca we allow you to handle your electronics from inn or outside your house. We recommend
                        you to plz read the instructions carefully and enjoy the luxury
                    </h3>
                </div>
                <div className={cx('content-room')}>
                    <span className={cx('title')}>Rooms</span>
                    <div className={cx('content-room-list')}>
                        <div className={cx('item', 'item1')}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('item')}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('item')} ref={contentRoomCenterRef}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('item')}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('item')}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('item')}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('item')}>
                            <img
                                className=""
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-bottom')}>
                <span className={cx('stats-title')}>Stats</span>
                <div className={cx('content-right-draw-frame')}>
                    <div className={cx('frame-item', 'item-one', { bgofff: buttonState === 'Off' })}>
                        <FontAwesomeIcon
                            className={cx('icon-lightbulb', { bgofff: buttonState === 'Off' })}
                            icon={faLightbulb}
                        />
                        <span className={cx({ bgofff: buttonState === 'Off' })}>6 Lights</span>
                        <button
                            className={cx('toggle-button', { bgofff: buttonState === 'Off' })}
                            onClick={toggleButton}
                        >
                            <div className={cx('toggle-button-on', { bgofff: buttonState === 'Off' })}>
                                {buttonState}
                            </div>
                            <div className={cx('cycle', { red: buttonState === 'Off' })}></div>
                        </button>
                    </div>

                    <div className={cx('frame-item', 'item-two', { bgofftwo: buttonStateTwo === 'Off' })}>
                        <FontAwesomeIcon
                            className={cx(
                                'icon-lightbulb',
                                { bgofftwo: buttonStateTwo === 'Off' },
                                { iconofftwo: buttonStateTwo === 'Off' },
                            )}
                            icon={faLightbulb}
                        />
                        <span className={cx({ bgofftwo: buttonStateTwo === 'Off' })}>6 Lights</span>
                        <button
                            className={cx('toggle-button', { bgofftwo: buttonStateTwo === 'Off' })}
                            onClick={toggleButtonTwo}
                        >
                            <div className={cx('toggle-button-on', { bgofftwo: buttonStateTwo === 'Off' })}>
                                {buttonStateTwo}
                            </div>
                            <div className={cx('cycle', { red: buttonStateTwo === 'Off' })}></div>
                        </button>
                    </div>

                    <div className={cx('frame-item', 'item-three', { bgoffthree: buttonStateThree === 'Off' })}>
                        <FontAwesomeIcon
                            className={cx(
                                'icon-lightbulb',
                                { bgoffthree: buttonStateThree === 'Off' },
                                { iconoffthree: buttonStateThree === 'Off' },
                            )}
                            icon={faLightbulb}
                        />
                        <span className={cx({ bgoffthree: buttonStateThree === 'Off' })}>6 Lights</span>
                        <button
                            className={cx('toggle-button', { bgoffthree: buttonStateThree === 'Off' })}
                            onClick={toggleButtonThree}
                        >
                            <div className={cx('toggle-button-on', { bgoffthree: buttonStateThree === 'Off' })}>
                                {buttonStateThree}
                            </div>
                            <div className={cx('cycle', { red: buttonStateThree === 'Off' })}></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
