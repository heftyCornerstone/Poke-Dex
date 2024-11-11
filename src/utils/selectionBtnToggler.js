import Swal from 'sweetalert2'
import pokeBoxLimitNum from '../assets/pokeDexConfigData/pokeBoxLimitNum';

const selectionBtnToggler = (selectionHook, pokemon) =>{
    const [selection, selectionHandler] = selectionHook;
    const selectionLen = selection.length;
    const isLimit = (selectionLen === pokeBoxLimitNum);

    const isDelete = selection.some(
        (storedPokemon) => storedPokemon.id === pokemon.id
    );
    const selectionBtnConfig = {
        "btnMode": isDelete ? "선택해제" : "선택",
        "configStyles" : {
            "btnColor": isDelete ? "#e8645a" : "#7074e6",
            "hoverColor": isDelete ? "#d65147" : "#585cd1",
        }
    };
    
    const handleOnclick = async () => {    
        if (isLimit && !isDelete) {
            Swal.fire({
                text: `포켓몬을 ${pokeBoxLimitNum}마리보다 더 많이 선택할 수 없습니다!`,
                icon: 'error',
                confirmButtonText: '확인',
            });
            return;
        }
        const {isConfirmed} = await Swal.fire({
            imageUrl: pokemon.img_url,
            text: `포켓몬을 ${isDelete ? "박스에서 꺼내" : "박스에 넣"}겠습니까?`,
            showDenyButton: true,
            confirmButtonText: `네`,
            denyButtonText: `아니요`,
        })
        if (isConfirmed) selectionHandler(isDelete, pokemon);
    };

    return {selectionBtnConfig, handleOnclick};
}

export default selectionBtnToggler;