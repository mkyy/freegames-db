import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --bg: #2A2E33;
        --bg-highlight: #32383E;
        --dark: #131313;
        --grey: #7A8288;
    }

    body{
        color:#AAAAAA;
        margin:0;
        padding:0;
        background-color: var(--bg);

    }

    .float-right{
        float: right;
    }

    .badge{
        color:#fff;
        background-color: #23CF5C;
        font-size:0.8rem;
        padding:5px;
    }

    .shadow{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .grow{
        transition: all ease 0.6s;

        &:hover{
            transform: scale(1.03);

        }
    }

    .badge-genre{
        color: var(--dark);
        padding:2px 4px;
        background-color: var(--grey);
        font-size: .7rem;
        border-radius: 5px;
    }

    .bg-dark{
        background-color: var(--bg-highlight);
    }
    .link{
        text-decoration: none;
        color: #AAAAAA;

        &:hover{
            color:#AAAAAA;
            cursor:pointer;
        }
    }

    .c-limit{
        display:inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 80%;
        margin:0;
    }


`;
