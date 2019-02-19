{
    let view = {
        el: '.page > main',
        template: `
            <h1>新建歌曲</h1>
            <form class="form">
                <div class="row">
                    <label for="">
                        革命
                       
                    </label>
                    <input type="text">
                </div>
                <div class="row">
                    <label for="">
                        歌手
                       
                    </label>
                    <input type="text">
                </div>
                <div class="row">
                    <label for="">
                        外链
                        
                    </label>
                    <input type="text">
                </div>
                <div class="row actions">
                    <button type="submit">保存</button>
                </div>
            </form>
        `,
        render(data){
            $(this.el).html(this.template)
        }
    }
    let model = {}
    let controller = {
        inin(view,model){
            this.view =view;
            this.model = model;
            this.view.render(this.model.data)
        }
    }
    controller.init(view,model)
}