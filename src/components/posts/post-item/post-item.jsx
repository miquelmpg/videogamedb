import * as RedditService from '../../../services/reddit-service';
import * as DateUtils from '../../../utils/date-utils';

function PostItem({ name, created, username, image }) {
    return (
        <div className="d-flex flex-column gap-3 align-items-center rounded-5 p-3" style={{backgroundColor: '#3A3A3A', position: 'relative'}}>
            <div className="d-flex gap-5" style={{width: '80%'}}>
                <img className="rounded-circle" src={`${image ? image : 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'}`} width={'100px'} height={'100px'} />
                <div >
                    <div>{username.slice(3, username.length)}</div>
                    <div>
                        <div><i className='fa fa-calendar'></i> {DateUtils.dateToString(created)[0]}</div>
                        <div><i className='fa fa-hourglass'></i> {DateUtils.dateToString(created)[1]}</div>
                    </div>
                    <a href={RedditService.getRedditPostByUser(username)} target="_blank" rel="noopener noreferrer" style={{position: 'absolute', top: '15px', right: '20px'}}><i className="fa fa-reddit fa-lg" style={{color: '#FF4500'}}></i></a>
                </div>
            </div>
            <div>{name}</div>
        </div>
    );
}

export default PostItem;