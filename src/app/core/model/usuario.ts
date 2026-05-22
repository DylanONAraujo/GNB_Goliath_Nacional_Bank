export interface Usuario{
  id?: number;
  nome: string;
  email: string;
  password?: string;
  perfil: 'admin' | 'operador' | 'visualizador';
  ativo: boolean;
  criadoEm?: string;
}