/* eslint-disable */
import axios from 'axios';
import store from '@/store/index';
import { refreshAccesToken } from './authorisatie';

function getID() {
  const token: any = store.getters['app/getAccesToken'];
  const parsedToken: any = JSON.parse(atob(token.split('.')[1]));
  return parsedToken.user_id;
}

export async function getUnreadMessages(): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `http://${window.location.hostname}:8000/api/chats/unread/`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${store.getters['app/getAccesToken']}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        if (response.status === 401) {
          refreshAccesToken(getUnreadMessages());
        }
      })
      .catch(error => {
      });
  });
}


export async function getNotifications(offset: number): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `http://${window.location.hostname}:8000/api/users/${getID()}/notifications/?limit=2&offset=${offset}`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${store.getters['app/getAccesToken']}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          }
          if (response.status === 401) {
            refreshAccesToken(getNotifications(offset));
          }
        })
        .catch(error => {
        });
    });
}

export async function getNewerNotifications(last: number): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `http://${window.location.hostname}:8000/api/users/${getID()}/notifications/${last}/new/`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${store.getters['app/getAccesToken']}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        if (response.status === 401) {
          refreshAccesToken(getNewerNotifications(last));
        }
      })
      .catch(error => {
      });
  });
}

export async function markSeen(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: `http://${window.location.hostname}:8000/api/users/${getID()}/notifications/${id}/edit/`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${store.getters['app/getAccesToken']}`,
        },
      })
        .then((response) => {
          
        })
        .catch(error => {
        });
    });
}
