import { useState } from 'react'
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

type CategoriaProps = {
    id: string,
    nome: string
}

type ProdutoProps = {
    id: string,
    nome: string,
    categoria: CategoriaProps,
    status: number,
    valor: number
}

const Produtos = () => {
    const [produtos, setProdutos] = useState<ProdutoProps[]>([
        {
            id: "1",
            nome: "coca-cola 350ml",
            categoria: {
                id: "1",
                nome: "Bebidas"
            },
            status: 1,
            valor: 5.5
        },
        {
            id: "2",
            nome: "frango assado",
            categoria: {
                id: "2",
                nome: "Aves"
            },
            status: 1,
            valor: 12
        },
    ]);
    const [createVisible, setCreateVisible] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<CategoriaProps[]>([
        { id: '1', nome: 'Bebidas' },
        { id: '2', nome: 'Aves' },
    ]);
    const [categoriaEscolhida, setCategoriaEscolhida] = useState<string>('');
    return(
        <>
            <h1 className="flex justify-content-between align-items-center mb-3">
                Produtos
                <Button label="Novo Produto" onClick={() => setCreateVisible(true)} />
            </h1>
            <DataTable value={produtos} tableStyle={{ minWidth: '50rem' }} paginator rows={1} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="id" header="ID"></Column>
                <Column field="nome" header="Nome"></Column>
                <Column field="categoria.nome" header="Categoria"></Column>
                <Column field="valor" header="Valor"></Column>
            </DataTable>

            <Sidebar visible={createVisible} position='right' onHide={() => setCreateVisible(false)}>
                <h2 className='mb-5'>Criar</h2>
                <form>
                    <label htmlFor="nome" className='block mb-2'>Nome</label>
                    <InputText className='w-full mb-3' placeholder='Digite o nome do produto' id='nome' />
                    <label htmlFor="categoria" className='block mb-2'>Categoria</label>
                    <Dropdown 
                    value={categoriaEscolhida}
                    options={categorias}
                    onChange={e => setCategoriaEscolhida(e.value)}
                    optionLabel="nome" 
                    placeholder="Escolha a categoria" className="w-full" />
                    <Button label='Salvar' className='w-full mt-3' />
                </form>
            </Sidebar>
        </>
    );
}

export default Produtos;