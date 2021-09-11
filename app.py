from flask import Flask, render_template

app = Flask(__name__)

# Routes:

# Đăng nhập
@app.route('/')
def home():
    return render_template('index.html')



@app.route('/baiviet')
def baiviet():
    return render_template('baivietguest.html')



@app.route('/dangnhap')
def dangnhap():
    return render_template('login.html')



@app.route('/dangky')
def dangky():
    return render_template('register.html')



@app.route('/user')
def indexuser():
    return render_template('index-logged-user.html')



@app.route('/user/baiviet')
def baivietuser():
    return render_template('baiviet.html')



@app.route('/user/trangcanhan')
def trangcanhanuser():
    return render_template('profile.html')



@app.route('/user/chinhsuathongtin')
def chinhsuathongtinuser():
    return render_template('edit_profile.html')



@app.route('/user/danhsachhotro')
def danhsachhotrouser():
    return render_template('userhelpsent.html')



@app.route('/user/viethotro')
def viethotrouser():
    return render_template('viethotro.html')



@app.route('/user/phanhoidaxong')
def phanhoidaxonguser():
    return render_template('phanhoidaxonguser.html')



@app.route('/user/quanlybaiviet')
def quanlybaivietuser():
    return render_template('post-manager.html')



@app.route('/about')
def about():
    return render_template('about.html')



@app.route('/admin')
def indexadmin():
    return render_template('index-logged-admin.html')



@app.route('/admin/dashboard')
def dashboard():
    return render_template('admin/dashboard.html')



@app.route('/admin/quanlybaivietvamucbai')
def quanlybaivietvamucbai():
    return render_template('admin/quanlybaivietvamucbai.html')



@app.route('/admin/quanlyfacts')
def quanlyfacts():
    return render_template('admin/quanlyfacts.html')



@app.route('/admin/xulyhotro')
def xulyhotro():
    return render_template('admin/xulyhotro.html')



@app.route('/admin/quanlythanhvien')
def quanlythanhvien():
    return render_template('admin/quanlythanhvien.html')



@app.route('/admin/trangcanhan')
def trangcanhanadmin():
    return render_template('profile_2.html')



@app.route('/admin/chinhsuathongtin')
def chinhsuathongtinadmin():
    return render_template('edit_profile2.html')



@app.route('/admin/baiviet')
def baivietadmin():
    return render_template('baivietadmin.html')



if __name__ == '__main__':
    app.run()