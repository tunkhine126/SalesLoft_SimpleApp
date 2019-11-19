fetchPeople = (pageNum = 1, per_page = this.state.per_page) => {
  this.setState({ loading: true })
  let full_url = [
    proxy_url,
    SL_People_url,
    `?page=${pageNum}`,
    `&per_page=${per_page}`,
    "&sorting=created_at"
  ].join('')

  fetch(full_url, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        this.setState({
          loading: false,
          people: res.data,
          page: res.metadata.paging.current_page,
          next_page: res.metadata.paging.next_page,
          per_page: res.metadata.paging.per_page
        })
      }
    })
}