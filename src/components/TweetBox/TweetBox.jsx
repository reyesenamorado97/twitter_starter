import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  let handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
  }

  function handleOnSubmit() {
    let newTweet = {

      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,

      comments: 0,
      retweets: 0,
      likes: 0,
    }

    // Add new tweet to the array of tweets
    props.setTweets(props.tweets.concat(newTweet));    

    // Reset text back to empty string
    props.setTweetText("")


    // increment number of tweets also
    props.userProfile.numTweets = props.userProfile.numTweets++
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText}  handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {

  console.log(props.tweetText)
  return <span></span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} 
      >Tweet</button>
    </div>
  )
}
