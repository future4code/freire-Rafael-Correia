import axios from 'axios'
import {useEffect, useState} from 'react'

import { BASE_URL } from '../constants/urls'

export default function useInfiniteScroll(page) {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts ] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        let cancel
        setLoading(true)
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: token
            },
            params: { page: page, size: 10},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }
        ).then(res => {
            setPosts(prevPosts => [...prevPosts, ...res.data])
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(err => {
            if(axios.isCancel(err)) return
            console.log(err)
        })
        return () => cancel()
    }, [page])
    return {posts, hasMore, loading}
}
