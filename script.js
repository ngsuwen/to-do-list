const newItem=(item)=>{
    const $newItem = $('<div>')
    $newItem.addClass('complete-task')
    $newItem.prepend(item)
    $newItem.css({'padding':'2px', 'cursor':'grab'})
    $(function(){$newItem.draggable();$('.completed').droppable()})
    $('.to-do').append($newItem)
    return $newItem
}

const moveItem=(item)=>{
    const $moveItem = $('<div>')
    $moveItem.addClass('remove-task')
    $moveItem.prepend(item)
    $moveItem.css({'padding':'2px', 'cursor':'pointer'})
    $moveItem.hide()
    $('.completed').append($moveItem)
    console.log('pass')
    return $moveItem
}

let $moveItem;
let $newItem

$(() => {
    $('form').on('submit', (event) => {
        const input = $('#input-box').val()
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
        let $newItem=newItem(input);
        $newItem.on('click', function(event){
            $('.remove-task').hide()
            $(event.currentTarget).attr('class','flip-out-hor-bottom')
            setTimeout(()=>{$(event.currentTarget).remove()}, 600)
            moveItem(input)
        });
    })
    $(document).on('click','[class^=completed]',function(event){
        $(event.currentTarget).find('.remove-task').toggle()
    });
    $(document).on('click','[class^=remove]',function(event){
        $(event.currentTarget).attr('class','flip-out-hor-bottom')
        setTimeout(()=>{$(event.currentTarget).remove()}, 600)
        stopPropatation()
    });
})