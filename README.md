<!--
 * @Author: rowG
 * @Date: 2021-03-27 09:24:11
 * @LastEditTime: 2021-03-28 20:56:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \03-Git\git.md
    -->

# Git

## Git基本概念与配置

`git config --global user.name "username"` 配置全局用户名   
`git config user.name` 查看所配置的全局用户名/指定的全局配置项  
`git config --list --global` 查看所有全局配置  

## Git基本操作

.gitignore 配置白名单 忽略名单 !rep中已有的文件被修改时无法忽略？  
`git init` 新建/初始化一个git仓库  
`git status` ` git status -s` 查看git状态  
`git add` 将文件添加到暂存区  
`git add .` 将所有新增和修改过的文件添加到暂存区  
`git commit -m "提交备注"` 将暂存区文件提交  
`git checkout -- ` 撤销对文件的修改/仓库覆盖工作区  
`git checkout .` 撤销对多个文件的修改 所有撤销的内容将丢失/有风险  
`git reset HEAD ` 将暂存区文件退回add之前的状态（已修改或未跟踪）  
`git reset HEAD .` 将所有暂存区文件退回add之前的状态  
`git commit -a -m "message"` 跳过暂存区 直接将所有已跟踪文件提交  
`git rm` 从git仓库和工作区同时移除文件  
`git rm -f ` 强制删除  
`git rm --cached` 从仓库中移除 但保留工作区中文件  
`git log` 查看提交记录  
`git log -2 --pretty=oneline` 最近两条 一行显示  
`git log -2 --pretty=format:"%h | %an | %ar | %s"` 自定义格式  
`git reset --hard <commitID>` 回退到指定版本  
`git reflog --pretty=oneline` 回退后 仍查看所有log   
`git remote add origin Git仓库地址` 本地与远程仓库绑定  
`git branch -vv` 查看分支绑定情况  
`git push -u origin master` 首次推送到远程仓库  
`git clone Git仓库地址` 克隆远程仓库到本地  
`git branch` 查看当前分支 *代表当前所在分支  
`git branch 分支名` 创建指定名称新分支 与pwd分支相同 所处位置不变    
`git checkout 分支名` 切换到指定分支  /跟踪分支  
`git checkout -b 分支命名` 快速创建指定名称新分支并切换过去  
`git checkout -b 本地分支名称 远程仓库名称/远程分支名称`  
把远程仓库对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名   
`git merge 分支名` 将指定分支合并到当前分支  
`git branch -d 分支名` 删除指定分支 不能是pwd  
`git push -u origin 本地分支名:远程分支名` 推送本地分支到远程仓库  
`git pull` 拉取远程分支最新代码到本地对应分支   
`git pull --rebase origin master` 远程库自带文件 强行拉取到本地 



## SSH密钥

`cd ~/.ssh`  切换到.ssh/目录  
`ls`  查看当前目录的文件 是否已有key  
`ssh-keygen -t rsa -C "xxxxx@xxxxx.com"` 创建一对新的SSH key (邮箱只为命名 不用验证)  
`cat ~/.ssh/id_rsa.pub` 查看公钥内容  
`ssh -T git@github.com` 验证hostname添加到ssh可信列表是否成功  

### 创建多个SSH密钥对应不同Git服务器
1. 创建新key 并且命名自定义 最好有意义便于区分  
`ssh-keygen -t rsa -f ~/.ssh/id_rsa_2 -C "yourmail@xxx.com"`
2. 在.ssh/目录下新建config
```
# default
Host github.com
Hostname github.com
User git
IdentityFile ~/.ssh/id_rsa
# another
Host gitee.com
Hostname gitee.com
User git
IdentityFile ~/.ssh/id_rsa_2
```
3. 取消全局用户名/邮箱设置，进入项目文件夹单独设置
```
# 取消全局用户名/邮箱设置
git config --global --unset user.name
git config --global --unset user.email
# 单独设置
git config user.name ""
git config user.email ""
// 或指定一个全局的username/email 在有需要的git repo再单独设置
```

xixixi