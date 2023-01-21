import fs from "fs";
// import fs from 'fs'

const Example = (props) => {

  return (
      <div>
        <code>fs</code> モジュールでのエラーのサンプル
      </div>
  )
}

export default Example

export async function getStaticProps() {
  // `getStaticProps()` の中で `fs` を少しでも利用すれば OK
  fs

  const fsPromises = fs.promises;

  const data = "aaa";
  fsPromises.writeFile("./pages/train/output.json", JSON.stringify(data, null, "  "));

  return {
    props: {}
  }
}
