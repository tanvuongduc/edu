const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Kết nối tới MongoDB thành công!');
}).catch((err) => {
  console.log('Lỗi kết nối tới MongoDB: ', err);
});

// Định nghĩa schema và model
const userSchema = new mongoose.Schema({
  name: String,
  gender: Boolean,
  roleId: Number,
});

const User = mongoose.model('User', userSchema);

// Lấy tất cả người dùng
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Lấy một người dùng
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('Không tìm thấy người dùng');
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Tạo route để thêm người dùng
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await User.create(user);
    res.send(savedUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Sửa một người dùng
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send('Không tìm thấy người dùng');
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Xóa một người dùng
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('Không tìm thấy người dùng');
    }
    res.send('Xóa người dùng thành công');
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(port, () => {
  console.log(`App chạy tại địa chỉ http://localhost:${port}`);
});
