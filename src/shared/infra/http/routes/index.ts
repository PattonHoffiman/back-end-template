import { Router } from 'express';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import confirmRoutes from '@modules/users/infra/http/routes/confirm.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import passwordRoutes from '@modules/users/infra/http/routes/password.routes';

const routes = Router();
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/users/confirm', confirmRoutes);
routes.use('/users/password', passwordRoutes);

export default routes;
