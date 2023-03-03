import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "../routes";

const Feed = (props) => {

  let link = props.links;
  let word = props.linkword;

  if(link==="OMIT"){link = "/";}
  if(word==="OMIT"){word = "";}

  return (
    <div class="event">
      <div class="label">
        <Link route={props.links}>
          <Icon name={props.icon} color={props.color} />
        </Link>
      </div>
      <div class="content">
        <div class="date">
          {props.dates}
        </div>
        <div class="user">
          {props.user}
        </div>
        <div class="summary">
           {props.messages}
           <u>
           <Link route={link}>
            {word}
           </Link>
           </u>
        </div>
      </div>
    </div>
  );
}

export default Feed;
