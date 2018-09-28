import { $js } from '../../shared/Helpers';
import { Get } from '../../services';

export default class Users {
    constructor() {
        this.table = 'users';
    }

    getUsers() {
        return Get(this.table);
    }

    getTableItem(user) {
        return `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
        </tr>`;
    }

    render(sel, data) {
        if(sel && data && data.length) {
            let html = `<table class="table-all">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(it => this.getTableItem(it)).join('')}
                </tbody>
            </table>`;
            const $sel = $js(sel);
            if($sel) { $sel.innerHTML = html; }
        }
    }

    listRender(sel) {
        this.getUsers()
        .then(data => this.render(sel, data));
    }
}