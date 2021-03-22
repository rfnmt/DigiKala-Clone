import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
export default class App extends React.Component {
  static async getInitialProps({ query: { page = 1 } }) {
    const r = await fetch(
      `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`
    )
    const d = await r.json()
    return {
      items: d.items,
      page: parseInt(page, 10)
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
        <button
          onClick={() => Router.push(`/?page=${this.props.page - 1}`)}
          disabled={this.props.page <= 1}
        >
          PREV
        </button>
        <button onClick={() => Router.push(`/?page=${this.props.page + 1}`)}>
          NEXT
        </button>
        <Link href="/?page=1">
          <a>First page</a>
        </Link>
      </div>
    )
  }
}
