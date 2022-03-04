class YoutubeService {
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }


    // mostPopular
    async mostPopular(){
        // 백틱 표현
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=30&regionCode=KR&key=${this.key}`, this.getRequestOptions)

        const result= await response.json()
        return result.items;
    }
    // // .then(result => console.log(result.items))
    // .then(result => setVideoItems(result.items)) // items를 받아와 setVideoItems 전달
    // .catch(error => console.log('error', error));


    // searchResult
    async searchResult(searchValueTxt){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&regionCode=kr&q=${searchValueTxt}&key=${this.key}`, this.getRequestOptions)

        const result = await response.json();

        return result.items.map(item=>({...item, id:item.id.videoId}))
    }
    // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&regionCode=kr&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
    // .then(response => response.json())
    // // 비디오 아이디를 id라는 변수로 사용하기 위해 변환
    // .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
    // // 검색 결과가 새로운 videolist를 보여줘야되므로 set호출
    // .then(items => setVideoItems(items))
    // .catch(error => console.log('error', error));

}

export default YoutubeService;