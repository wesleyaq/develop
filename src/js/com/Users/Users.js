import { $js } from '../../shared/Helpers';
import { Get } from '../../services';

export default class Users {
    constructor() {
        this.table = 'users';
    }

    tableRowHtml(user) {
        return `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
        </tr>`;
    }

    render(sel) {
        Get(this.table)
        .then(data => {
            if(sel && data && data.length) {
                const $sel = $js(sel);
                let html = `<table class="table-all">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(it => this.tableRowHtml(it)).join('')}
                    </tbody>
                </table>`;

                if($sel) { $sel.innerHTML = html; }
            }
        });
    }
}