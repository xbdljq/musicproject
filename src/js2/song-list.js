{
    let view = {
        el: '#songList-container',
        template: `
            <ul class="songList">
                <li class="active">歌曲1</li>
                <li>歌曲2</li>
            </ul>
        `,
        render(data){
            $(this.el).html(this.template)
        },
        clearActive(){
            $(this.el).find('.active').removeClass('active')
        }

    }
    let model = {
        data:[],
        
    }
    let controller = {
        init(view,model){
         
            this.view =view
            this.model = model
            this.view.render(this.model.data)
            window.eventHub.on('upload',() => {
                this.view.clearActive()
            })
            window.eventHub.on('create',(data) => {
                this.model.data.push(data)
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view,model)
}