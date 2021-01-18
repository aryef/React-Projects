import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  fetchNotifications,
  selectAllNotifications
} from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const unreadNotificationsCount = notifications.filter((n) => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  let unreadNotificationsBadge

  if (unreadNotificationsCount > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{unreadNotificationsCount}</span>
    )
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
